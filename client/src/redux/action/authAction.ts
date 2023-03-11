import http from '../../constant/api';

export default interface ITutorialData {
  id?: any | null,
  title: string,
  description: string,
  published?: boolean,
}

http.get<ITutorialData>(`/tutorials/${1}`);
http.post<ITutorialData>("/tutorials", {});
http.delete<any>(`/tutorials`);
// http.put<any>(`/tutorials/${id}`, data);
http.get<Array<ITutorialData>>("/tutorials");