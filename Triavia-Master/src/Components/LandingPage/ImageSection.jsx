import Quiz_1 from './Images/Quiz_1.jpeg';
import Quiz_2 from './Images/Quiz_2.jpeg';
import Quiz_3 from './Images/Quiz_3.jpeg';
import quiz_4 from './Images/quiz_4.jpg';

function ImageSection() {
  return (
    <div className="image-section d-flex mt-5">
      <div className=" image-part-1">
        <img src={Quiz_1} alt="" />
        <img className="mt-2" src={Quiz_2} alt="" />
      </div>
      <div className="image-part-2">
        <img src={Quiz_3} alt="" />
        <img className="mb-3 mt-2" src={quiz_4} alt="" />
      </div>
    </div>
  );
}

export default ImageSection;
