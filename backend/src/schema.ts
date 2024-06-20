interface ExaminationInput {
  input: string[];
}

interface ExaminationResult {
  division: string;
  subjects: {
    [key: string]: number;
  };
  divisionResult: number;
  allSubject: number;
  result: "pass" | "fail";
}

export { ExaminationInput, ExaminationResult };
