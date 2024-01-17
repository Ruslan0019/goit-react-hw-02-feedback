import { Button, FeedbackOptionsList } from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map((option, index) => (
        <Button
          key={index}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </FeedbackOptionsList>
  );
};
