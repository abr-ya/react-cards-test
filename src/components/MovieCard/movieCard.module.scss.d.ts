declare namespace MovieCardModuleScssNamespace {
  export interface IMovieCardModuleScss {
    buttons: string;
    card: string;
    imgWrapper: string;
  }
}

declare const MovieCardModuleScssModule: MovieCardModuleScssNamespace.IMovieCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MovieCardModuleScssNamespace.IMovieCardModuleScss;
};

export = MovieCardModuleScssModule;
