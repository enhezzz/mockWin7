/**
 * Created by 105 on 2017/8/12.
 */
var Person = (function () {
    function Person() {
        this.name = "enhezzz";
        this.age = 18;
        this.code = "2015021047";
        // this.name = name;
    }
    return Person;
}());
var male = new Person();
console.log(male.name);
