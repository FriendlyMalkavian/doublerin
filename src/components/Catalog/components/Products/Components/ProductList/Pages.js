
export default function Pages({active,pages, handle}) {
  const formPageList = () => {
    const renderPage = (page) => active === page ? 
          <ActivePage key={page} page={page} handle={handle} /> 
          : 
          <IdlePage key={page} page={page} handle={handle} />

    if(pages.length <= 6) return pages.map((page) => renderPage(page))
    
    
      if(active <= 3) return [
      renderPage(1), 
      renderPage(2), 
      renderPage(3), 
      renderPage(4), 
      <span>...</span>, 
      renderPage(pages.length)
    ]
    
    if(active <=  pages.length - 3) return [
      renderPage(1), 
      <span>...</span>,
      renderPage(active-1), 
      renderPage(active), 
      renderPage(active+1) ,
      <span>...</span>,
      renderPage(pages.length)
    ]

    else return [
      renderPage(1),
      <span>...</span>,
      renderPage(pages.length - 3),
      renderPage(pages.length - 2),
      renderPage(pages.length - 1),
      renderPage(pages.length),
    ]

  } 

  return (
    <div className="flex flex-row justify-center align-middle self-end gap-4">
      {
          formPageList().map(x => x)
      }
    </div>
  );
}


function IdlePage({page, handle}) {
  return <span className='w-12 h-6 bordered text-center opacity-80 text-gray-700 hover:cursor-pointer' onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()

    handle(page)
  }}>{page}</span>
}

function ActivePage({page, handle}) {
  return <span className='w-12 h-6 bordered bg-app-blue text-white text-center hover:cursor-pointer' onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()

    handle(page)
  }}>{page}</span>
}