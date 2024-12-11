// import { useMutation, useQuery } from '@tanstack/react-query';

// export function useCreateQuery(queryKey: string[], queryFunction: any) {
//   const { data, isLoading, error } = useQuery({
//     queryKey: [...queryKey],
//     queryFn: async () => await queryFunction(),
//   });

//   return { data, isLoading, error };
// }

// export function useUpdateQuery(mutateFunction: Function) {
//   const { isSuccess, status, data, error, reset, mutate } = useMutation({
//     mutationFn: async () => await mutateFunction(),
//   });

//   return { isSuccess, status, data, error, reset, mutate };
// }
