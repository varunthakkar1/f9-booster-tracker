export interface Mission {
    missionId: number,
    missionName: string,
    launchDate: Date,
    missionStatus: string,
    landingStatus: string,
    missionPatchSrc: string,
    boosterId: number
}