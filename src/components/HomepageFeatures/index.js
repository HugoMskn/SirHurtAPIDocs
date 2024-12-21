import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/play.svg').default,
    description: (
      <>
        SirHurt's API has been designed to be simple to use
      </>
    ),
  },
  {
    title: 'Worry free',
    Svg: require('@site/static/img/gui.svg').default,
    description: (
      <>
       I'm handling the API so you can focus on making your GUI
      </>
    ),
  },
  {
    title: 'Almost dependency free',
    Svg: require('@site/static/img/json.svg').default,
    description: (
      <>
       I only use Netwonsoft.Json to handle JSON data, else this is dependency free !
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
