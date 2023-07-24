import { cardOptions } from "../../helper";
import ContentLayout from "../ContentLayout";
import QuienSoy from "../QuienSoy";

const Inicio = () => {
  return (
    <div>
      <QuienSoy title="Quien soy" />
      <ContentLayout title="Trabajos" category={cardOptions} />
    </div>
  );
}

export default Inicio