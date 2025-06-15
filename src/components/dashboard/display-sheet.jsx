import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const componentData = {
  id: "",
  category: "Alert",
  description: "random description",
  components: ['<div>This is a div component</div>', '<div>this is another div component</div>'],
};

const DisplaySheet = () => {
  const { componentId } = useParams();
// fetch component data with the api call by using the componentId
console.log('componentId', componentId)

  return (
    <section className="p-8">
      <p className="uppercase text-2xl font-medium">{componentData.category}</p>
      <p className="text-md text-gray-400">{componentData.description}</p>
      <div className="mt-8 border rounded border-gray-300 p-4">
        {
            componentData.components.map((item) => (
                parse(DOMPurify.sanitize(item))
            ))
        }
      </div>
    </section>
  );
};

export default DisplaySheet;
