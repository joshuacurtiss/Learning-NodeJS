class User {
    
    constructor( params={} ) {
        this.id=params.id || "";
        this.fname=params.fname || "";
        this.lname=params.lname || "";
        this.title=params.title || "";
        this.email=params.email || "";
    }

    get found() {
        return (this.id!="");
    }

    get name() {
        var out=this.fname+" "+this.lname;
        return out.trim();
    }

    toString() {
        var out=`${this.fname} ${this.lname} ` + (this.id.length?`(${this.id}) `:"") + (this.title.length?`(${this.title}) `:"") + (this.email.length?`<${this.email}>`:"");
        return out.trim();
    }
}

module.exports=User;