interface Addition {
  /**
   * first number
   */
  first: number;

  /**
   * second number
   */
  second: number;
}

/**
 * Caluc addition numbers
 */
export const addition = (props: Addition) => {
  const { first, second } = props;
  return first + second;
};
