import {Professeur} from './professeur.model';
import {Module} from './module.model';
import {ExamSalle} from './exam-salle';
import {ExamSurveillant} from './exam-surveillant';

export class Exam {
  public id: number;
  public  reference: string;
  public dateDepart: Date;
  public dateFin: Date;
  public  prof = new Professeur();
  public  examSurveillants = new Array<ExamSurveillant>();
  public  module = new Module();
  public  examSalles = new Array<ExamSalle>();
}