declare namespace LoaderModuleScssNamespace {
  export interface ILoaderModuleScss {
    Loader: string;
    center: string;
  }
}

declare const LoaderModuleScssModule: LoaderModuleScssNamespace.ILoaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoaderModuleScssNamespace.ILoaderModuleScss;
};

export = LoaderModuleScssModule;
