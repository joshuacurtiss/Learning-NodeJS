class User {
    
    constructor( params={} ) {
        this.id=params.id || "";
        this.fname=params.fname || "";
        this.lname=params.lname || "";
        this.positionshorttitle=params.positionshorttitle || "";
        this.email=params.email || "";
        this.usertype=params.usertype || "";
    }

    get found() {return (this.id!="")}
    get name() {return (this.fname+" "+this.lname).trim()}
    get title() {return this.positionshorttitle}
    get fullid() {return this.usertype.toLowerCase()+this.id}

    toString() {
        var out=`${this.fname} ${this.lname} ` + (this.fullid.length?`(${this.fullid}) `:"") + (this.title.length?`(${this.title}) `:"") + (this.email.length?`<${this.email}>`:"");
        return out.trim();
    }
}

module.exports=User;