import { ActionType } from "../enum/action-type.enum";
import { Build } from "./build.model";

export class Action {
    public type: ActionType;
    public

}

export interface AffectingObject<T> {
    effect(t: T);
}

export interface ActionableObject {
    can: (b: Build) => boolean;
}