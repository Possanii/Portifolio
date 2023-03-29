import KnowledgeItem from '../KnowledgeItem';
import styles from './Knowledge.module.scss';

const knowledge = ['React', 'TypeScript', 'JavaScript', 'Node', 'HTML', 'CSS', 'MySQL'];

const Knowledge = () => {
  return (
    <div className={styles.title} id='knowledge'>
      <h1>Knowledge</h1>
      <div className={styles.container}>
        <div className={styles.container__progressbars}>
          {knowledge.map((item, index) => <KnowledgeItem key={index} name={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;