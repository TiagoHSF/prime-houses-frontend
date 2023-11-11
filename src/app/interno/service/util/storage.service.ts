import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor(@Inject(DOCUMENT) private document: Document) { }

	get cookie(): IStorage {
		return new CookieStorage(this.document);
	}
	get localStorage(): IStorage {
		return new StorageImpl(window.localStorage);
	}
	get sessionStorage(): IStorage {
		return new StorageImpl(window.sessionStorage);
	}
}

const calcExpire = ($expire: any) => {
	let expire: Date = new Date();
	expire.setTime(expire.getTime() + (1000 * 60 * 60 * 24));
	if (typeof $expire === 'number') {
		expire = new Date();
		expire.setTime(expire.getTime() + $expire);
	} else if (typeof $expire === 'string') {
		const replaceRegex = /[^0-9]/gim;
		const paramExpire = $expire.trim().toLocaleLowerCase();
		let multiplicador = 0;
		if (paramExpire.endsWith('ms') || paramExpire.match(/^[0-9]+$/gim)) {
			multiplicador = parseInt(paramExpire.replace(replaceRegex, ''), 10);
		} else if (paramExpire.endsWith('s')) {
			multiplicador = parseInt(paramExpire.replace(replaceRegex, ''), 10) * 1000;
		} else if (paramExpire.endsWith('m')) {
			multiplicador = parseInt(paramExpire.replace(replaceRegex, ''), 10) * 1000 * 60;
		} else if (paramExpire.endsWith('h')) {
			multiplicador = parseInt(paramExpire.replace(replaceRegex, ''), 10) * 1000 * 60 * 60;
		} else if (paramExpire.endsWith('d')) {
			multiplicador = parseInt(paramExpire.replace(replaceRegex, ''), 10) * 1000 * 60 * 60 * 24;
		}
		expire = new Date();
		expire.setTime(expire.getTime() + multiplicador);
	} else if ($expire instanceof Date) {
		expire = $expire;
	}
	return expire;
};

interface IStorage {

	list(): Map<string, any>;

	find(key: string): any;

	removeAll(): void;

	remove(key: string): void;

	add(key: string, value: any, expire?: any): void;
}

class CookieStorage implements IStorage {
	constructor(private document: Document) { }

	public list(): Map<string, string> {
		const map = new Map();
		try {
			const list = document.cookie.split(';');
			for (const item of list) {
				const key = item.substring(0, item.indexOf('='));
				const value = item.substring(item.indexOf('=') + 1);
				map.set(key.trim(), value.trim());
			}
		} catch (error) {
			console.debug(error);
		}
		return map;
	}

	public find(name: string): any {
		try {
			const cookies = this.list();
			for (const [key, value] of cookies) {
				if (key === name) {
					const base64 = atob(value);
					const json = JSON.parse(base64);
					return json;
				}
			}
		} catch (error) {
			console.debug(error);
		}
	}

	public removeAll(): void {
		try {
			const cookies = this.list();
			for (const [key, value] of cookies) {
				this.remove(key);
			}
		} catch (error) {
			console.debug(error);
		}
	}

	public remove(key: string): void {
		try {
			this.add(key, '', -1);
		} catch (error) {
			console.debug(error);
		}
	}

	public add($key: string, $value: any, $expire?: any): void {
		try {
			const cookie = [];
			const expire: Date = calcExpire($expire);
			const json = JSON.stringify($value);
			const base64 = btoa(json);
			cookie.unshift(`${$key}=${base64}`);
			cookie.push(`expires=${expire.toUTCString()}`);
			this.document.cookie = cookie.join(';');
		} catch (error) {
			console.debug(error);
		}
	}
}

class StorageImpl implements IStorage {
	constructor(private storage: any) { }

	public list(): Map<string, string> {
        const list = new Map<string, string>();
        try {
          for (const key in this.storage) {
            if (this.storage.hasOwnProperty(key)) {
              list.set(key, localStorage[key]);
            }
          }
        } catch (error) {
          console.debug(error);
        }
        return list;
      }

	public find($key: string): any {
		try {
			const item = this.storage.getItem($key);
			if (item) {
				const base64 = atob(item);
				const json = JSON.parse(base64);
				return json;
			}
		} catch (error) {
			console.debug(error);
		}
	}

	public removeAll(): void {
		try {
			this.storage.clear();
		} catch (error) {
			console.debug(error);
		}
	}

	public remove($key: any): void {
		try {
			this.storage.removeItem($key);
		} catch (error) {
			console.debug(error);
		}
	}

	public add($key: string, $value: any): void {
		try {
			const json = JSON.stringify($value);
			const base64 = btoa(json);
			return this.storage.setItem($key, base64);
		} catch (error) {
			console.debug(error);
		}
	}
}