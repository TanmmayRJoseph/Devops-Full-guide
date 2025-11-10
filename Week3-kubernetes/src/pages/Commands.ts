export const sections = [
  {
    title: "Minikube Commands",
    color: "from-sky-500 to-blue-500",
    commands: [
      { cmd: "minikube start", desc: "Starts a Minikube cluster on your machine." },
      { cmd: "minikube status", desc: "Shows the status of Minikube (Running/Stopped/etc.)." },
      { cmd: "minikube ip", desc: "Shows the IP of your Minikube cluster." },
      { cmd: "minikube service <service-name>", desc: "Opens the service in a browser (NodePort service)." },
      { cmd: "minikube dashboard", desc: "Opens the Kubernetes dashboard in your browser." },
    ],
  },
  {
    title: "Kubectl Cluster / Node Commands",
    color: "from-green-500 to-emerald-500",
    commands: [
      { cmd: "kubectl get nodes", desc: "Lists all nodes in the cluster with status." },
      { cmd: "kubectl describe node <node-name>", desc: "Shows detailed info about a node." },
      { cmd: "kubectl cluster-info", desc: "Shows info about the cluster and API server URL." },
    ],
  },
  {
    title: "Pod Commands",
    color: "from-purple-500 to-indigo-500",
    commands: [
      { cmd: "kubectl get pods", desc: "Lists all pods in the current namespace." },
      { cmd: "kubectl describe pod <pod-name>", desc: "Shows detailed pod info." },
      { cmd: "kubectl logs <pod-name>", desc: "Shows logs of a pod/container." },
      { cmd: "kubectl exec -it <pod-name> -- /bin/bash", desc: "Open a shell inside the pod." },
      { cmd: "kubectl delete pod <pod-name>", desc: "Deletes a pod (may be recreated by deployment)." },
    ],
  },
  {
    title: "Service Commands",
    color: "from-yellow-500 to-orange-500",
    commands: [
      { cmd: "kubectl expose pod <pod-name> --type=NodePort --port=<port>", desc: "Exposes a pod to a service." },
      { cmd: "kubectl get svc", desc: "Lists all services." },
      { cmd: "kubectl describe svc <service-name>", desc: "Shows detailed service info." },
      { cmd: "kubectl delete svc <service-name>", desc: "Deletes a service." },
    ],
  },
  {
    title: "Deployment Commands",
    color: "from-pink-500 to-rose-500",
    commands: [
      { cmd: "kubectl create deployment <name> --image=<image>", desc: "Creates a deployment managing pods." },
      { cmd: "kubectl get deployments", desc: "Lists all deployments." },
      { cmd: "kubectl describe deployment <name>", desc: "Shows deployment details." },
      { cmd: "kubectl scale deployment <name> --replicas=<number>", desc: "Scales up/down pods for deployment." },
      { cmd: "kubectl rollout status deployment/<name>", desc: "Checks rollout status of deployment." },
      { cmd: "kubectl delete deployment <name>", desc: "Deletes deployment and pods." },
    ],
  },
  {
    title: "Other Useful Commands",
    color: "from-gray-500 to-slate-500",
    commands: [
      { cmd: "kubectl get all", desc: "Shows all resources (pods, svc, deployments)." },
      { cmd: "kubectl apply -f <file.yaml>", desc: "Creates or updates resources from YAML file." },
      { cmd: "kubectl delete -f <file.yaml>", desc: "Deletes resources defined in YAML file." },
      { cmd: "kubectl top pod", desc: "Shows CPU/memory usage (requires metrics-server)." },
      { cmd: "kubectl get namespaces", desc: "Lists all namespaces." },
      { cmd: "kubectl config view", desc: "Shows kubeconfig info." },
      { cmd: "kubectl get events", desc: "Shows cluster events (errors, warnings)." },
    ],
  },
];