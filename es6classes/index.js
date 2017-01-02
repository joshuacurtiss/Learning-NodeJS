class BaseWidget {
    constructor(name) {
        this._name=name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if(newName) this._name=newName;
    }
    greet() {
        return "Hello, "+this.name+".";
    }
}

class Widget extends BaseWidget {
    get name() {
        return this._name.toUpperCase();
    }
    greet() {
        return "Heya, "+this.name+"!!!";
    }
}

var b=new BaseWidget("Widget");
var w=new Widget("Widget");
console.log(`My normal widget's name is "${b.name}". My special widget's name is "${w.name}".`);
console.log(b.greet());
console.log(w.greet());
