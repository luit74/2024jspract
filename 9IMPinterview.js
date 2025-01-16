// HOW DOES A CODE EXECUTE IN JAVASCRIPT *** VERY IMP TOPIC FOR INTERVIEW

// HOW DOES THE CALL STACKS ARE EXECUTED. CALL STACK IS NOTHING BUT A MEMORY IN WHICH THE FUNCTIONS GOES IN AND THEN GETS EXECUTED AND HOW DOES IT COMES OUT.

// EXECUTION CONTEXT:-
//  1. global execution context or global environment i.e {} ye toh banega e banega
//  2. function execution context
//  3. Eval execution context // this context comes in the advance topics such as while using databases

// {} lets assume that this is a block of javascript code , and it runs in two phases

    let val1 = 10                      
    let val2 = 5 

    function addNum(n1,n2){
        let total = n1 + n2
        return
    }

    let result1 = addNum(val1,val2)
    let result2 = addNum(10,2)

// a. memory creation phase (also known as creation phase.) , here whatever the variable or numbers we have declared a place holder is allocated in (variables k liye jaga allocate kiya jata hai baas , execute nehi kiya jata hai.)

// b. execuiton phase.

// #############################################################################################################################

// this is how a code is run

// STEP 1: first of all global execution happens {}
// STEP 2: Memory Phase , every variable is just stored and not executed
/** from the above code , 
 *  val1 - undefined
 *  val2 - undefined
 *  function addNum -- defination (defination of the function) 
 *  result1 - undefined
 *  result2 - undefined
 */

// this is the first cycle and it will happen always in the beginning of execution of a code

// cycle 2 is execution phase

/**
 *  STEP1: val1 = 10
 *  STEP2: val2 = 5
 *  addNum ------>  we have already created the defination of the function and hold it . here we will directly execute it.
 * it creates an additiional executional context we call it a sand box, which contents two main items that is , 1. new variable environment & 2. execution thread
 * 
 * 
 * Inside this new sand box again the same process will execute i.e is memory phase and execution phase.
 * 
 * whatever times we write a function a new sand box is created to execute the code 
 * 
 *  FOR RESULT1 :- inside that new sandbox again the memory phase and execution context occurs
 * where in :>
 *  1. Memory phase-- 
 *     val1 :- undefined
 *     val2 :- undefined
 *     total:- undefined
 * 
 * 2. Execution Context or phase (thread) -- 
 *      num1 :- 10
 *      num2 :- 5
 *      total:- 15 , and return value of total is again sent back to the global executional context or the parent executional context. 
 * 
 *  the sandbox which is created to execute the code in result1 , after the execution and giving the result the sanbox is deleted,
 * after deletion again it comes back to the global execution context
 * 
 * 
 * FOR RESULT2 : then the same process will execute , new sand box will be created with memory phase and execution thread
 */

// #############################################################################################################################


// CALLSTACK 
// lifo method -- last in first out

function one(){
    console.log("ONE")
    two()
}
function two(){
    console.log("TWO")
    three()
}
function three(){
    console.log("THREE")
}

console.log(one())
console.log(two())
console.log(three())