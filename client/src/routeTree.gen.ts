/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RootLayoutImport } from './routes/_root/_layout'
import { Route as AuthLayoutImport } from './routes/_auth/_layout'
import { Route as RootLayoutIndexImport } from './routes/_root/_layout/index'
import { Route as AuthLayoutSignupImport } from './routes/_auth/_layout/signup'
import { Route as AuthLayoutLoginImport } from './routes/_auth/_layout/login'
import { Route as RootLayoutSearchIndexImport } from './routes/_root/_layout/search/index'
import { Route as RootLayoutProfileIndexImport } from './routes/_root/_layout/profile/index'
import { Route as RootLayoutUserUsernameImport } from './routes/_root/_layout/user/$username'
import { Route as RootLayoutProfileEditImport } from './routes/_root/_layout/profile/edit'
import { Route as RootLayoutPostCreateImport } from './routes/_root/_layout/post/create'

// Create/Update Routes

const RootLayoutRoute = RootLayoutImport.update({
  id: '/_root/_layout',
  getParentRoute: () => rootRoute,
} as any)

const AuthLayoutRoute = AuthLayoutImport.update({
  id: '/_auth/_layout',
  getParentRoute: () => rootRoute,
} as any)

const RootLayoutIndexRoute = RootLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => RootLayoutRoute,
} as any)

const AuthLayoutSignupRoute = AuthLayoutSignupImport.update({
  path: '/signup',
  getParentRoute: () => AuthLayoutRoute,
} as any)

const AuthLayoutLoginRoute = AuthLayoutLoginImport.update({
  path: '/login',
  getParentRoute: () => AuthLayoutRoute,
} as any)

const RootLayoutSearchIndexRoute = RootLayoutSearchIndexImport.update({
  path: '/search/',
  getParentRoute: () => RootLayoutRoute,
} as any)

const RootLayoutProfileIndexRoute = RootLayoutProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => RootLayoutRoute,
} as any)

const RootLayoutUserUsernameRoute = RootLayoutUserUsernameImport.update({
  path: '/user/$username',
  getParentRoute: () => RootLayoutRoute,
} as any)

const RootLayoutProfileEditRoute = RootLayoutProfileEditImport.update({
  path: '/profile/edit',
  getParentRoute: () => RootLayoutRoute,
} as any)

const RootLayoutPostCreateRoute = RootLayoutPostCreateImport.update({
  path: '/post/create',
  getParentRoute: () => RootLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth/_layout': {
      id: '/_auth/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_root/_layout': {
      id: '/_root/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof RootLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_layout/login': {
      id: '/_auth/_layout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLayoutLoginImport
      parentRoute: typeof AuthLayoutImport
    }
    '/_auth/_layout/signup': {
      id: '/_auth/_layout/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthLayoutSignupImport
      parentRoute: typeof AuthLayoutImport
    }
    '/_root/_layout/': {
      id: '/_root/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof RootLayoutIndexImport
      parentRoute: typeof RootLayoutImport
    }
    '/_root/_layout/post/create': {
      id: '/_root/_layout/post/create'
      path: '/post/create'
      fullPath: '/post/create'
      preLoaderRoute: typeof RootLayoutPostCreateImport
      parentRoute: typeof RootLayoutImport
    }
    '/_root/_layout/profile/edit': {
      id: '/_root/_layout/profile/edit'
      path: '/profile/edit'
      fullPath: '/profile/edit'
      preLoaderRoute: typeof RootLayoutProfileEditImport
      parentRoute: typeof RootLayoutImport
    }
    '/_root/_layout/user/$username': {
      id: '/_root/_layout/user/$username'
      path: '/user/$username'
      fullPath: '/user/$username'
      preLoaderRoute: typeof RootLayoutUserUsernameImport
      parentRoute: typeof RootLayoutImport
    }
    '/_root/_layout/profile/': {
      id: '/_root/_layout/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof RootLayoutProfileIndexImport
      parentRoute: typeof RootLayoutImport
    }
    '/_root/_layout/search/': {
      id: '/_root/_layout/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof RootLayoutSearchIndexImport
      parentRoute: typeof RootLayoutImport
    }
  }
}

// Create and export the route tree

interface AuthLayoutRouteChildren {
  AuthLayoutLoginRoute: typeof AuthLayoutLoginRoute
  AuthLayoutSignupRoute: typeof AuthLayoutSignupRoute
}

const AuthLayoutRouteChildren: AuthLayoutRouteChildren = {
  AuthLayoutLoginRoute: AuthLayoutLoginRoute,
  AuthLayoutSignupRoute: AuthLayoutSignupRoute,
}

const AuthLayoutRouteWithChildren = AuthLayoutRoute._addFileChildren(
  AuthLayoutRouteChildren,
)

interface RootLayoutRouteChildren {
  RootLayoutIndexRoute: typeof RootLayoutIndexRoute
  RootLayoutPostCreateRoute: typeof RootLayoutPostCreateRoute
  RootLayoutProfileEditRoute: typeof RootLayoutProfileEditRoute
  RootLayoutUserUsernameRoute: typeof RootLayoutUserUsernameRoute
  RootLayoutProfileIndexRoute: typeof RootLayoutProfileIndexRoute
  RootLayoutSearchIndexRoute: typeof RootLayoutSearchIndexRoute
}

const RootLayoutRouteChildren: RootLayoutRouteChildren = {
  RootLayoutIndexRoute: RootLayoutIndexRoute,
  RootLayoutPostCreateRoute: RootLayoutPostCreateRoute,
  RootLayoutProfileEditRoute: RootLayoutProfileEditRoute,
  RootLayoutUserUsernameRoute: RootLayoutUserUsernameRoute,
  RootLayoutProfileIndexRoute: RootLayoutProfileIndexRoute,
  RootLayoutSearchIndexRoute: RootLayoutSearchIndexRoute,
}

const RootLayoutRouteWithChildren = RootLayoutRoute._addFileChildren(
  RootLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof RootLayoutRouteWithChildren
  '/login': typeof AuthLayoutLoginRoute
  '/signup': typeof AuthLayoutSignupRoute
  '/': typeof RootLayoutIndexRoute
  '/post/create': typeof RootLayoutPostCreateRoute
  '/profile/edit': typeof RootLayoutProfileEditRoute
  '/user/$username': typeof RootLayoutUserUsernameRoute
  '/profile': typeof RootLayoutProfileIndexRoute
  '/search': typeof RootLayoutSearchIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AuthLayoutRouteWithChildren
  '/login': typeof AuthLayoutLoginRoute
  '/signup': typeof AuthLayoutSignupRoute
  '/': typeof RootLayoutIndexRoute
  '/post/create': typeof RootLayoutPostCreateRoute
  '/profile/edit': typeof RootLayoutProfileEditRoute
  '/user/$username': typeof RootLayoutUserUsernameRoute
  '/profile': typeof RootLayoutProfileIndexRoute
  '/search': typeof RootLayoutSearchIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_auth/_layout': typeof AuthLayoutRouteWithChildren
  '/_root/_layout': typeof RootLayoutRouteWithChildren
  '/_auth/_layout/login': typeof AuthLayoutLoginRoute
  '/_auth/_layout/signup': typeof AuthLayoutSignupRoute
  '/_root/_layout/': typeof RootLayoutIndexRoute
  '/_root/_layout/post/create': typeof RootLayoutPostCreateRoute
  '/_root/_layout/profile/edit': typeof RootLayoutProfileEditRoute
  '/_root/_layout/user/$username': typeof RootLayoutUserUsernameRoute
  '/_root/_layout/profile/': typeof RootLayoutProfileIndexRoute
  '/_root/_layout/search/': typeof RootLayoutSearchIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/signup'
    | '/'
    | '/post/create'
    | '/profile/edit'
    | '/user/$username'
    | '/profile'
    | '/search'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/login'
    | '/signup'
    | '/'
    | '/post/create'
    | '/profile/edit'
    | '/user/$username'
    | '/profile'
    | '/search'
  id:
    | '__root__'
    | '/_auth/_layout'
    | '/_root/_layout'
    | '/_auth/_layout/login'
    | '/_auth/_layout/signup'
    | '/_root/_layout/'
    | '/_root/_layout/post/create'
    | '/_root/_layout/profile/edit'
    | '/_root/_layout/user/$username'
    | '/_root/_layout/profile/'
    | '/_root/_layout/search/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthLayoutRoute: typeof AuthLayoutRouteWithChildren
  RootLayoutRoute: typeof RootLayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthLayoutRoute: AuthLayoutRouteWithChildren,
  RootLayoutRoute: RootLayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth/_layout",
        "/_root/_layout"
      ]
    },
    "/_auth/_layout": {
      "filePath": "_auth/_layout.tsx",
      "children": [
        "/_auth/_layout/login",
        "/_auth/_layout/signup"
      ]
    },
    "/_root/_layout": {
      "filePath": "_root/_layout.tsx",
      "children": [
        "/_root/_layout/",
        "/_root/_layout/post/create",
        "/_root/_layout/profile/edit",
        "/_root/_layout/user/$username",
        "/_root/_layout/profile/",
        "/_root/_layout/search/"
      ]
    },
    "/_auth/_layout/login": {
      "filePath": "_auth/_layout/login.tsx",
      "parent": "/_auth/_layout"
    },
    "/_auth/_layout/signup": {
      "filePath": "_auth/_layout/signup.tsx",
      "parent": "/_auth/_layout"
    },
    "/_root/_layout/": {
      "filePath": "_root/_layout/index.tsx",
      "parent": "/_root/_layout"
    },
    "/_root/_layout/post/create": {
      "filePath": "_root/_layout/post/create.tsx",
      "parent": "/_root/_layout"
    },
    "/_root/_layout/profile/edit": {
      "filePath": "_root/_layout/profile/edit.tsx",
      "parent": "/_root/_layout"
    },
    "/_root/_layout/user/$username": {
      "filePath": "_root/_layout/user/$username.tsx",
      "parent": "/_root/_layout"
    },
    "/_root/_layout/profile/": {
      "filePath": "_root/_layout/profile/index.tsx",
      "parent": "/_root/_layout"
    },
    "/_root/_layout/search/": {
      "filePath": "_root/_layout/search/index.tsx",
      "parent": "/_root/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
