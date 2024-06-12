/// <reference types="vite/client" />
declare module '*.vue' {

    import type { DefineComponent } from 'vue';

    const vueComponent: DefineComponent<{}, {}, any>;

    export default vueComponent;

}
declare module '*.ts' {
  const value: any;
  export default value;
}
  
declare module '*.js' {
  const value: any;
  export default value;
}