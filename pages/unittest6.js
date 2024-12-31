import Quiz from '../components/unittest6';
import KhanAcademySidebar from '../components/sidebar';


export default function Quizz() {
  return (
    <div className="flex">
      <KhanAcademySidebar />
      <div className="flex-1">
        <Quiz />
      </div>
    </div>
  );
}
