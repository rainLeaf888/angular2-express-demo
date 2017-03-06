import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule from './app/app.module';

export default function main() {
	platformBrowserDynamic().bootstrapModule(AppModule); // 启动应用程序
}

main();