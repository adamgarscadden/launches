import MissionCard from './MissionCard';

const MissionMain = ({ data }): JSX.Element => {
  return (
    <main className="bg-grey p-5" data-testid="mission-main">
      <section className="container mx-auto px-4 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {data &&
            data.map(({ ...props }) => {
              return (
                <MissionCard
                  key={props.date_utc}
                  name={props.name}
                  date_utc={props.date_utc}
                  cores={props.cores}
                  payloads={props.payloads}
                  links={props.links}
                  success={props.success}
                  failures={props.failures}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default MissionMain;
