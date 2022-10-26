import { EmptyContainer } from "./styles";

export const EmptyCalendar = () => {
  return (
    <EmptyContainer>
      <h2>Não existe nenhum evento :(</h2>
      <p>
        Me mande sugestão do que colocar aqui{" "}
        <a
          href="https://twitter.com/datFranky"
          target="_blank"
          rel="noreferrer"
        >
          no twitter.
        </a>
      </p>
    </EmptyContainer>
  );
};
