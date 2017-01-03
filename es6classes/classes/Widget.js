const BaseWidget=require("./BaseWidget.js");

class Widget extends BaseWidget {
    get name() {
        return this._name.toUpperCase();
    }
    greet() {
        return "Heya, "+this.name+"!!!";
    }
}

Widget.TYPE="Widget";

module.exports=Widget;