import { ComponentOptions, PluginObject, VueConstructor, VNode } from 'vue'

import { RouteRecord } from 'vue-router';

type Dictionary<T> = { [key: string]: T }
type CallbackFunction = (params: Dictionary<string>) => string;

type Breadcrumbs = {
  label: string
  parent: string
}

class VueBreadcrumbs implements PluginObject<ComponentOptions<Vue>> {
  public install(Vue: VueConstructor<Vue>, options: Dictionary<any> = {}) {

    if (options.template) {
      options.render = undefined;
    }


    Object.defineProperties(Vue.prototype, {
      $breadcrumbs: {
        get(): RouteRecord[] {
          function findParents(this: Vue, routeName: string, matches: RouteRecord[] = []): RouteRecord[] {
            const routeParents: RouteRecord[] = this.$router.resolve({ name: routeName }).route.matched;
            const routeParentLast: RouteRecord | undefined = routeParents.pop();

            if (routeParentLast) {
              matches.unshift(routeParentLast);

              let breadcrumb = routeParentLast.meta?.breadcrumb;

              if (breadcrumb === undefined) {
                if (routeParentLast.name) {
                  breadcrumb = routeParentLast.name;
                }
              }

              if (typeof breadcrumb === 'function') {
                breadcrumb = breadcrumb.call(this, this.$route.params);
              }

              if (breadcrumb?.parent) {
                return findParents.call(this, breadcrumb.parent, matches);
              }
            }
            return routeParents.concat(matches);
          }

          function resolveByName(route: RouteRecord, params: Record<string, any>): string {
            route.meta.breadcrumb = {};

            const isRoot: boolean = route.parent === undefined;
            const isRootChildren = isRoot === false && route.path.split('/').reverse()[0].length === 0;
            let label = route.name;

            if (isRoot && label === undefined) {
              label = route.path.replace(/\//, '');
              route.meta.breadcrumb = label;
            }

            if (isRootChildren) {
              if (label && route.parent) {
                route.parent.meta.breadcrumb = label;
              }
              delete route.meta.breadcrumb;
            }

            if (isRoot === false && isRootChildren === false) {
              label = label?.split('-').reverse()[0];

              if (label && Reflect.has(params, label)) {
                label = params[label];
              }

              route.meta.breadcrumb = label;
            }

            return label ?? ''
          }

          return this.$route.matched
            .flatMap((route: RouteRecord) => {
              let routeRecord: RouteRecord[] = [route];
              let breadcrumb = route.meta?.breadcrumb;

              if (breadcrumb === undefined) {
                breadcrumb = resolveByName(route, this.$route.params);
              }

              if (typeof breadcrumb === 'function') {
                breadcrumb = breadcrumb.call(this, this.$route.params);
              }

              if (breadcrumb?.parent) {
                const matched = findParents.call(this, breadcrumb.parent, []);
                routeRecord = [...matched, ...routeRecord];
              }

              return routeRecord
            })
            .map((route: RouteRecord) => route.path.length === 0
              ? ({ ...route, path: '/' })
              : route
            );
        }
      }
    });

    Vue.component('Breadcrumbs', Vue.extend({
      methods: {
        getBreadcrumb(bc: string | CallbackFunction | Breadcrumbs): string {
          let name = bc;

          if (typeof name === 'function') {
            name = name.call(this, this.$route.params);
          }

          if (typeof name === 'object') {
            name = name.label
          }

          return name;
        },
        getPath(crumb: RouteRecord): string {
          let { path } = crumb;

          for (const [key, value] of Object.entries(this.$route.params)) {
            path = path.replace(`:${key}`, value);
          }

          return path;
        }
      },
      render(createElement): VNode {
        if (this.$breadcrumbs.length) {
          return createElement(
            'ol',
            {
              class: {
                'breadcrumb': true
              }
            },
            this.$breadcrumbs.map((crumb: RouteRecord, index: number) => {
              if (crumb?.meta?.breadcrumb) {
                const label = this.getBreadcrumb(crumb.meta.breadcrumb);
                if (label?.length > 0) {
                  return createElement(
                    'li',
                    {
                      class: {
                        'breadcrumb-item': true
                      },
                      props: {
                        key: index
                      }
                    },
                    [
                      createElement(
                        'router-link',
                        {
                          props: {
                            to: { path: this.getPath(crumb) },
                            tag: index !== this.$breadcrumbs.length - 1 ? 'a' : 'span'
                          }
                        },
                        ` ${label}`
                      )
                    ]
                  )
                }
              }

              return createElement();
            })
          )
        }

        return createElement();
      },
      ...options
    }))
  }
}

export default new VueBreadcrumbs();

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(new VueBreadcrumbs())
}
