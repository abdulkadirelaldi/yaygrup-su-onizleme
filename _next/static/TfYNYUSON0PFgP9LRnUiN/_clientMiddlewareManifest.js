self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/yaygrup-su-onizleme(?:\\/(_next\\/data\\/[^/]{1,}))?\\/yonetim(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/yonetim/:path*"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()