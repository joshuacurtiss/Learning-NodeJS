const fs=require(`fs`);

// Instantiate and populate the classes
var classes={};
try {
    var classfiles=fs.readdirSync(`${__dirname}/classes`);
    for( var classfile of classfiles ) {
        var c=require(`${__dirname}/classes/${classfile}`);
        classes[c.TYPE]=c;
    }
} catch(e) {
    console.error("Could not load classes. "+e);
}

var b=new classes["Base Widget"]("Widget");
var w=new classes["Widget"]("Widget");
var f=new classes["Foo Bar"]("Widget");
console.log(`My normal widget's name is "${b.name}". My special widget's name is "${w.name}".`);
console.log(b.greet());
console.log(w.greet());
console.log(f.greet());