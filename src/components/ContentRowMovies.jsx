import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

let productInDataBase = {
  color: "primary",
  titulo: "Total de Productos",
  valor: 0,
  icono: "fas fa-film",
};

let category = {
  color: "success",
  titulo: "Total de Categorias",
  valor: 0,
  icono: "fas fa-award",
};

let user = {
  color: "warning",
  titulo: "Total de Usuarios",
  valor: 0,
  icono: "fas fa-user",
};

function ContentRowTop() {
  let [product, setProduct] = useState(productInDataBase);
  let [users, setUser] = useState(user);
  let [categori, setCategory] = useState(category);

  useEffect(() => {
    fetch("http://localhost:3008/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          ...product,
          valor: data.count,
        });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3008/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUser({
          ...users,
          valor: data.count,
        });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3008/api/category")
      .then((res) => res.json())
      .then((data) => {
        let productCount = data.categorias.length;
        let rolCount = data.rol.length;

        setCategory({
          ...categori,
          valor: productCount + rolCount,
        });
      });
  }, []);

  let cardProps = [product, categori, users];
  return (
    <>
      {/*<!-- Content Row -->*/}
      <div className="row">
        {cardProps.map((producto, index) => {
          {
            console.log(producto);
          }
          return <SmallCard {...producto} key={index} />;
        })}
      </div>
    </>
  );
}
export default ContentRowTop;
