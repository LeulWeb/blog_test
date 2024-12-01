

export default function Container({children}: {children:React.ReactNode}){
    return <div className="p-6 w-11/12 md:w-8/12 mx-auto">
        {children}
    </div>
}