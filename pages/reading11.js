import Reading from '../components/reading11';
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