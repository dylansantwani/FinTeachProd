import Reading from '../components/reading1';
import KhanAcademySidebar from '../components/sidebar';


export default function Readingg() {
  return (
    <div className="flex">
      <KhanAcademySidebar />
      <div className="flex-1">
        <Reading />
      </div>
    </div>
  );
}