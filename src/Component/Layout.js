import { useRef } from 'react';
import '../css/Layout.css'

function Layout({children, product_info, search}){
  const inputNode= useRef(null);

  const handleSearch= (e)=>{
    search.set(e.target.value);
  }

  return(
    <main>
        <h2>Frequently Ask Questions</h2>
        <section>
          <img alt={product_info.sub_title.text} src={product_info.image} />
          <h3>{product_info.title}</h3>
          <div id="search">
            &#128269;<input type='text' ref={inputNode} placeholder='search keyword' value={search.value} onChange={handleSearch} />
          </div>
          {children}
        </section>
      </main>
  );
}

export default Layout;