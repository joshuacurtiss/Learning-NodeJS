const BaseWidget=require("./BaseWidget.js");

class Foobar extends BaseWidget {
    greet() {
        return "Foobar, "+this.name+".";
    }
}

Foobar.TYPE="Foo Bar";

module.exports=Foobar;