export default function Card({item}) {
      return(
          
                <div className="flex-shrink-0 rounded-xl   h-[450px] w-[350px] border-[1px] bg-[#111] shadow-lg">
                        <img className="w-[350px] h-[50%] p-4 border- " src={item.image} alt={item.title} />
                        <h1 className="text-xl font-bold pl-4 text-white">{item.title}</h1>
                        <p className="pl-4 pt-5 text-gray-400">{item.info}</p>
                        
                        <div className="flex flex-wrap pt-4 gap-3">
                              <div className="w-auto ml-4 text-white  p-1 rounded-2xl bg-gray-700">{item.component[0]}</div>
                              <div className="w-auto ml-4 text-white  p-1 rounded-2xl bg-gray-700">{item.component[1]}</div>
                              <div className="w-auto ml-4 text-white  p-1 rounded-2xl bg-gray-700">{item.component[2]}</div>
                        </div>
                </div>
      )

}
