
export class LinkItem {
    desc; url;
    constructor(desc: string, url: string) {
        this.desc = desc;
        this.url = url;
    }
}

export class Spec {
    name; rawDesc;
    constructor(name: string, rawDesc: string) {
        this.name = name;
        this.rawDesc = rawDesc;
    }
}

export class ImageInfo {
    name; value;
    constructor(name: string, value: ImageInfo[] | (string | LinkItem)[]) {
        this.name = name;
        this.value = value;
    }
}

export class DocInfo {
    info; specs;
    constructor(info: ImageInfo[], specs: Spec[]) {
        this.info = info;
        this.specs = specs;
    }
}