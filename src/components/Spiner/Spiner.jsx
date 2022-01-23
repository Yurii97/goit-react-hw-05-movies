import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import s from './Spiner.module.css';

function Spiner() {
  return (
    <div>
      <TailSpin color="#00BFFF" margin="0 auto" height={60} width={60} />
    </div>
  );
}

export default Spiner;
