import { BaseExamination } from "./base";

enum Subject {
  "science" = "s",
  "humanities" = "l",
  "computer_science" = "cs",
}

export class ExaminationHandler extends BaseExamination {
  calculateExameeResults(input: string[]): number {
    let totalPassed = 0;

    input.forEach((examinee) => {
      const data = examinee.split(" ");
      const division = data[0] as Subject;
      const scores = data.slice(1, data.length).map((score) => {
        return parseInt(score);
      });

      if (FirstStageEvaluator(scores)) {
        if (SecondStageEvaluator(division, scores)) {
          totalPassed++;
        }
      }
    });

    return totalPassed;
  }
}

function FirstStageEvaluator(scores: number[]) {
  const totalPassScore = 350;
  const totalExameeScore = scores.reduce(
    (partialSum, currentScore) => partialSum + currentScore,
    0
  );
  return totalExameeScore >= totalPassScore;
}

function SecondStageEvaluator(divison: Subject, scores: number[]): boolean {
  const math = scores[1];
  const science = scores[2];
  const japanese = scores[3];
  const geo_his = scores[4];
  const it = scores[5];

  if (divison === Subject.science) {
    const passScore = 160;
    const totalScore = math + science;
    return totalScore >= passScore;
  }

  if (divison === Subject.humanities) {
    const passScore = 160;
    const totalScore = japanese + geo_his;
    return totalScore >= passScore;
  }

  if (divison === Subject.computer_science) {
    const passScore = 160;
    const totalScore = math + it;
    return totalScore >= passScore;
  }
  return false;
}
