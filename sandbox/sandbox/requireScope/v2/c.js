require.def("c", // module ID
// ************************************************************************************************ 
[
    // list of dependencies
    "require", 
    "exports", 
    "module"
],
// ************************************************************************************************ 
function(require, exports, module) {
// ************************************************************************************************ 

console.log("loading C module");

exports.C = true;

// ************************************************************************************************ 
});
