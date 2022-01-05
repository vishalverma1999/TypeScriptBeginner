type StringOrNum = string|number;    // type alias
type ObjWithName = {name: string, uid: StringOrNum };  // type alias

const logDetails = (uid: StringOrNum, item: string)=> {
        console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: ObjWithName)=> {
    console.log(`${user.name} says hello`);
}