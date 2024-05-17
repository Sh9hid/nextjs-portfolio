import { motion } from "framer-motion"




//variants
const StairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
};

 // calculate the reversed index for staggered display
 const reversedIndex = (index: number) => { // explicitly defining types for now
    const totalSteps= 6 // no. of steps
    return totalSteps - index - 1
 }


 const Stairs = () => {
    return <>
    {/* render 6 divs, each representing a step of the stairs
        Each div will have the same animation defined by the stairAnimation object.
        The delay for each div will be calculated dynamically based on it's reversed index.
        Creating a staggered effect with decreasing delay for each subsequent step 
    */}
    {[...Array(6)].map((_,index:number)=> { // explicitly defining types for now
         return ( <motion.div key={index} variants={StairAnimation} initial="initial" animate="animate" exit="exit" transition={{
            duration:0.4,
            ease: "easeInOut",
            delay: reversedIndex(index) * 0.1

        }}
        className="h-full w-full bg-white relative"  
         />
    )
    })}
    
    
    </>

}

export default Stairs;