import { useParams } from "react-router-dom";
import { componentConfig } from "../../data/component-config";

const DisplaySheet = () => {
  const { componentName } = useParams();
  return (
    <section className="p-8">
      <p className="uppercase text-2xl font-medium border-b pb-3 border-gray-200">
        {componentName}
      </p>
      {componentConfig.find((e) => e.title?.toLowerCase() === `${componentName}`.toLowerCase()).component()}
    </section>
  );
};

export default DisplaySheet;
