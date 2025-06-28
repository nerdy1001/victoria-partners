'use client'

const Container = ({children}: { children: React.ReactNode}) => {
    return ( 
        <div className="max-w-[1400px] w-full mx-auto xl:px-10 px-4 py-2">
            {children}
        </div>
     );
}
 
export default Container;