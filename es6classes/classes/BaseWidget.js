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

BaseWidget.TYPE="Base Widget";

module.exports=BaseWidget;