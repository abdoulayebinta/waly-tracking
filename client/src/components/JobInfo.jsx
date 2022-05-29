import Wrapper from '../assets/styledComponents/JobInfo';

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};
export default JobInfo;
