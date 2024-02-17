import '../css/Layout.css'

function Layout({children, product_info}){
  return(
    <main>
        <h2>Frequently Ask Questions</h2>
        <section>
          <img alt={product_info.sub_title.text} src={product_info.image} />
          <h3>{product_info.title}</h3>
          {children}
        </section>
      </main>
  );
}

export default Layout;