class User {
    
    constructor( params={} ) {
        const stringprops=[
            "id",
            "usertype",
            "fname",
            "mname",
            "lname",
            "siteid",
            "sitename",
            "bldgid",
            "bldgname",
            "room",
            "email",
            "fullphone",
            "cell",
            "positionid",
            "positiontitle",
            "positionshorttitle",
            "grade",
            "schoolid",
            "schoolname",
            "divid",
            "divname",
            "deptid",
            "deptname",
            "sex",
            "bargunitid",
            "bargunitname",
            "rankid",
            "rankname",
            "classid",
            "classname",
            "exemptid",
            "exemptname"
        ];
        const dateprops=[
            "startdate",
            "enddate"
        ];
        // Set all string and date properties:
        for( var prop of stringprops ) {this[prop]=params[prop] || ""}
        for( var prop of dateprops ) {this[prop]=new Date(params[prop])}
        // Set the supervisor if one exists:
        this.sup=(typeof params.sup=="object")?new User(params.sup):null; 
    }

    get found() {return (this.id!="")}
    get name() {return (this.fname+" "+this.lname).trim()}
    get title() {return this.positiontitle}
    get fullid() {return this.usertype.toLowerCase()+this.id}

    toString() {return (`${this.fname} ${this.lname} ` + (this.fullid.length?`(${this.fullid}) `:"") + (this.title.length?this.title:"")).trim()}
}

module.exports=User;